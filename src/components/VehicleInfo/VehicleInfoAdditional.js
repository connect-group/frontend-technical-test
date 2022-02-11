import React from 'react';

export default function VehicleInfoAdditional({ meta, className }) {
  const setEmissionValue = (option) => {
    const { template, ...arr } = option;
    let updatedTemplate = template;

    Object.keys(arr).forEach((v) => {
      updatedTemplate = updatedTemplate.replaceAll(`$${v}`, arr[v]);
    });

    return updatedTemplate;
  };

  const createMetaValue = (id) => {
    const value = meta[id];

    switch (id) {
      case 'drivetrain':
      case 'bodystyles':
        return value.join(', ');
      case 'emissions':
        return setEmissionValue(value);
      default:
        return value;
    }
  };

  return (
    <div data-testid="info" className={`${className}-info-additional`}>
      <table className={`${className}-info-additional__table`}>
        <tbody>
          {Object.keys(meta).map((option) => {
            return (
              <tr key={option}>
                <td>{option}</td>
                <td>{createMetaValue(option)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
