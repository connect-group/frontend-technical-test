import styled from "styled-components";
import { device } from "../../constants";

export const Container = styled.div`
    flex-basis: 100%;
    max-width: 100%;
    box-sizing: border-box;
    text-align: left;
    min-height: auto;
    border: 1px solid #eef1f1;
    display: flex;
    
    .cover{
        width: 50vh;
        height: 100%;
        padding-right: 15px;
        
        img {
            width: 100%;
            height: 100%;
        }
    }
    
    .content {
        padding: 10px;
        width: 150vw;
    
        &__name{
            text-transform: uppercase;
            font-size: 25px;
        }
        
        &__text {
            margin-top: 15px;
            color: #555a5f;
        }
    }
    
    @media ${device.tablet} { 
        flex-basis: 50%;
        max-width: 50%;
        min-height: 290px;
        display: block;
        text-align: center;
        
        .cover{
            width: 100%;
            height: auto;
            padding-right: 0;
        }
        
        .content {
            width: auto;
            
             &__name{
                border-top: 1px solid #000;
                border-bottom: 2px solid #000;
            }
        }
    } 
    
    @media ${device.laptop} {
        flex-basis: 25%;
        max-width: 25%;
        min-height: 290px;
    }
`;
