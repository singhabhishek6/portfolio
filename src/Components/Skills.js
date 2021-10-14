import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import Button1 from './Button1';


const front = ["HTML","CSS","JAVASCRIPT","REACT","REDUX","MATERIAL-UI"]
const  back = ["NODEJS","EXPRESS","MONGODB","SOCKETIO"]
const tech = ["VSCOE","POSTMAN","GITHUB"]
const soft = ["TEAM PLAYER","Communication Skills","Work Ethic","Creativity","Flexibility"]
function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                      <Button1 button={front}/>
                      <Button1 button={back}/>
                      <Button1 button={tech}/>
                      <Button1 button={soft}/>
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 1rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
