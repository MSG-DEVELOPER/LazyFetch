import styled from "styled-components";

export const Container = styled.div `
padding-top: 3.75rem;
height: auto;
padding-bottom: 10rem;
//la pagina entera de utils

.selected{
   
  width: 30%;
 // height: 90vh;

}

.utils{
    width: 65%;
   // height: 90vh;
}

section{ //la chicha: a la izq el div con el endpoint selected y a derecha utils
    display: flex;
    justify-content: space-between;
}



`;
