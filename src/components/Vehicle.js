import React, { useState } from "react";
import clsx from "clsx";
import {
  Card,
  CardMedia,
  Box,
  CardContent,
  Typography,
  Grow,
  Divider,
  IconButton,
  CardActions,
  Collapse,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: (props) => (props ? "left" : "center"),
  },
  media: {
    height: (props) => (props ? 100 : 400),
    objectFit: "fill",
  },
  vehicleNameStyle: {
    padding: theme.spacing(1),
    color: "black",
    fontSize: (props) => (props ? 16 : undefined),
  },
  dividerColor: {
    background: "black",
    height: 2,
    width: 250,
  },
  modelStyle: {
    marginTop: theme.spacing(1),
    fontSize: (props) => (props ? 12 : 14),
    color: theme.palette.text.secondary,
    fontStyle: "italic",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cardContent: {
    paddingBottom: 0,
    justify: "center",
  },
  cardActions: {
    padding: 0,
  },
  description: {
    fontSize: (props) => (props ? 12 : undefined),
  },
  dividerMarginTop: {
    marginTop: 8,
  },
  boldFont: {
    fontSize: (props) => (props ? 12 : undefined),
    fontWeight: "bold",
  },
  tableCell: {
    fontSize: (props) => (props ? 12 : undefined),
  },
  errorColor: {
    color: "red",
  },
}));

const AdditionalVehicalInformation = ({ loading, data, error, expanded }) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles(isMobileView);

  if (!loading && !data && !error) {
    return null;
  }

  if (loading && !data) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return (
      <Typography className={classes.errorColor}>
        server error while loading the vehicle additional information
      </Typography>
    );
  }

  return (
    <Collapse in={expanded} timeout="auto">
      <Grid container direction="column" justify="center">
        <Typography
          align="center"
          variant="h6"
          component="h2"
          className={classes.vehicleNameStyle}
        >
          {data.price}
        </Typography>

        <Divider orientation="vertical" flexItem />
        <Typography align="center" className={classes.description}>
          {data.description}
        </Typography>
        <Divider className={classes.dividerMarginTop}></Divider>
        <TableContainer>
          <Table aria-label="custom pagination table">
            <TableBody>
              <TableRow>
                <TableCell align="justify" className={classes.boldFont}>
                  Passenger Capacity
                </TableCell>
                <TableCell align="justify" className={classes.tableCell}>
                  {data.meta.passengers}
                </TableCell>
                <TableCell align="justify"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="justify" className={classes.boldFont}>
                  Drivetrain
                </TableCell>
                {data.meta.drivetrain.map((item, index) => (
                  <TableCell
                    key={index}
                    align="justify"
                    className={classes.tableCell}
                  >
                    {item}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell align="justify" className={classes.boldFont}>
                  Body Style
                </TableCell>
                {data.meta.bodystyles.map((item, index) => (
                  <TableCell
                    key={index}
                    align="justify"
                    className={classes.tableCell}
                  >
                    {item}
                  </TableCell>
                ))}
                {data.meta.bodystyles.length === 1 && (
                  <TableCell align="justify"></TableCell>
                )}
              </TableRow>
              <TableRow>
                <TableCell align="justify" className={classes.boldFont}>
                  Emission
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {data.meta.emissions.template}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {data.meta.emissions.value}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Collapse>
  );
};

export default function Vehicle({ vehicle, getVehicleInformation }) {
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("xs"));

  const classes = useStyles(isMobileView);

  const handleExpandClick = async (id) => {
    setExpanded(!expanded);

    if (!expanded) {
      setLoading(true);
      try {
        const additionalInformation = await getVehicleInformation(id);
        setData(additionalInformation);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setExpanded(!expanded);
        setLoading(false);
        setError(true);
      }
    }
  };

  const MobileView = () => {
    return (
      <Card className={classes.card}>
        <Grid container alignItems="center">
          <Grid item={5}>
            <Box height={100} width={100}>
              <CardMedia
                component="img"
                className={classes.media}
                src={vehicle.media[0].url}
                title={vehicle.media[0].name}
              />
            </Box>
          </Grid>
          <Grid item xs>
            <CardContent>
              <Typography
                style={{ padding: 0 }}
                align="left"
                variant="h6"
                component="h2"
                className={classes.vehicleNameStyle}
              >
                {vehicle.name}
              </Typography>
              <Typography
                align="left"
                variant="overline"
                className={classes.modelStyle}
              >{`Model Year: ${vehicle.modelYear}`}</Typography>
            </CardContent>
          </Grid>
          <Grid item>
            <CardActions className={classes.cardActions}>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={() => handleExpandClick(vehicle.id)}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
        <AdditionalVehicalInformation
          loading={loading}
          data={data}
          error={error}
          expanded={expanded}
        />
      </Card>
    );
  };

  if (isMobileView) {
    return <MobileView />;
  }

  return (
    <Grow in timeout={1000}>
      <Card className={classes.card}>
        <Box height={400}>
          <CardMedia
            component="img"
            className={classes.media}
            src={vehicle.media[0].url}
            title={vehicle.media[0].name}
          />
        </Box>
        <CardContent className={classes.cardContent}>
          <Grid container justify="center">
            <Divider className={classes.dividerColor} />
          </Grid>
          <Typography
            variant="h6"
            component="h2"
            className={classes.vehicleNameStyle}
          >
            {vehicle.name}
          </Typography>
          <Grid container justify="center">
            <Divider className={classes.dividerColor} />
          </Grid>
          <Typography
            variant="overline"
            className={classes.modelStyle}
          >{`Model Year: ${vehicle.modelYear}`}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={() => handleExpandClick(vehicle.id)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <AdditionalVehicalInformation
          loading={loading}
          data={data}
          error={error}
          expanded={expanded}
        />
      </Card>
    </Grow>
  );
}
