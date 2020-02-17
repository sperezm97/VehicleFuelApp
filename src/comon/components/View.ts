import styled from "styled-components";
import is, { match } from "styled-is";
import { View as nbView } from "react-native";

const View = styled(nbView)`

  ${is("row")`
    flex-direction: row;
  `}

  ${is("column")`
    flex-direction: column;
  `}

  ${is("center")`
    justify-content: center;
    align-items: center;
  `}

  ${is("flex")`
    flex: 1;
  `}

  ${is("padding")`
    padding: ${({ padding }) =>
      `${padding[0] || 0}px ${padding[1] || 0}px ${padding[2] ||
        0}px ${padding[3] || 0}px`}
  `}

  ${is("margin")`
    margin: ${({ margin }) =>
      `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] ||
        0}px ${margin[3] || 0}px`}
  `}

  ${match("card", "left")`
    backgroundColor: ${({ theme }) => theme.colors.white};
    border-bottom-left-radius: 15px;
    border-top-start-radius: 15px;
    padding: 15px 10px 15px 0;
    margin-left: 10px
  
  `}

  ${match("card", "right")`
    backgroundColor: ${({ theme }) => theme.colors.white};
    border-bottom-right-radius: 15px;
    border-top-end-radius: 15px;
    padding: 15px 0 15px 10px;
    margin-right: 10px
  `}

  ${match("card", "container")`
    flex: 1
    flex-direction: column;
    backgroundColor: ${({ theme }) => theme.colors.white};
    margin: 20px 0 0 0;
    border-top-start-radius: 20px;
    border-top-end-radius: 20px;
    padding: ${({ theme }) => theme.spacing.base}px;
  `}

  ${match("card", "body")`
    flex-direction: column;
    backgroundColor: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    padding: 20px
    margin: 20px 0 10px 0;
  `}

  ${match("align", "left")`
    align-items: flex-end;
    paddingRight: 20px;
  `}

  ${match("align", "right")`
    align_items: flex-start;
    paddingLeft: 20px;
  `}


  ${is("line")`
    border-width: 1px;
    width: 30px;
    border-color: ${({ theme }) => theme.colors.grey.light};
  `}

  ${is("bigLine")`
    width: ${({ theme }) => theme.spacing.deviceWidth * 0.85}px;
    margin:10px;
    border-bottom-width: 1.5px;
    border-color: ${({ theme }) => theme.colors.grey.light};
  `}

  ${is("headerList")`
    flex-direction: row;
    justify-content: space-between;
    alignItems: center;
    margin: 0 8px
  `}

  ${is("listHeader")`
    flex: 1;
    justify-content: space-between;
    align-content: center
  `}

  ${is("serviceThumb")`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    background-color: ${({ color }) => color}
  `}

  ${is("headerContainer")`
    flex:1;
    height: 89px;
    background-color: #fff
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
`}

  ${is("headerLeft")`
    flex:1;
    align-items: flex-start
  `}

  ${is("headerBody")`
    flex:1;
    align-items: center
        
  `}

  ${is("headerRight")`
    flex:1;
    align-items: flex-end
        
  `}


`;

export default View;
