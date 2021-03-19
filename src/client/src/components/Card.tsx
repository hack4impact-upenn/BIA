import React from 'react' 
import styled from 'styled-components' 
 
// work here for task 1.2

// const Card = (props) => { 
//   return <div>card</div>; 
// };s
 
 
const Container = styled.div`
  border-radius: 10px;
  height: 300px;
  background-color: Colors.primaryPurple;
  overflow: hidden; 
  justify-content: center;
	align-items: center;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);
    transition-duration: 0.5s;
  }
`

const Titlebar = styled.view`
	width: 100%;
	margin-top: 50px;
	padding-left: 80px;
`;

const Avatar = styled.img`
  width: 44px;
	height: 44px;
	background: black;
	border-radius: 22px;
	margin-left: 20px;
  position: absolute;
	top: 0;
	left: 0;
  
`;

const OrgName = styled.text`
	font-size: 20px;
	font-weight: 500;
	color: white;
`;


const OrgCity = styled.text`
  font-size: 20px;
	font-weight: 500;
	color: white;

`
const OrgDescription = styled.text`
  display: flex;
  width: 100%;
  height: 20%;
  text-align: center;
  color: white;

`
  
const Card = ({ descriptionText, photo, name, cityState }) => (
  <Container
   
  >

  <Titlebar>
					<Avatar  src={photo} />
					<OrgName>
          <p style={{ margin: 'auto' }}>{name}</p>
          </OrgName>
          <OrgCity>
          <p style={{ margin: 'auto' }}>{cityState}</p>
          </OrgCity> 

				</Titlebar>
    <div style={{ width: '100%', height: '80%' }}></div>
    

   
    <OrgDescription>
      <p style={{ margin: 'auto' }}>{descriptionText}</p>
    </OrgDescription>

  </Container>
)

export default Card

  
  
  


