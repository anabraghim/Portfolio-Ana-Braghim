import React from 'react'
import {ContainerTitles, Title1, SpanTitle1, ContainerButtons, Button, AboutMeSkills, TitleSection , ServicesContainer, ProjectsContainer} from "./style"
import { FooterComponent } from '../../components/footer'
import { ServiceComponent } from '../../components/service'
import { ProjectComponent } from '../../components/project'

export function Home(){
    return(
        <div>
           <ContainerTitles>
                <Title1>Como posso te <SpanTitle1>ajudar?</SpanTitle1></Title1>
                <p className='title2'>Desenvolvimento de sites limpos, rápidos e funcionais.</p>
                <ContainerButtons>
                    <a href=""><Button color>Baixar currículo</Button></a>
                    <a href="mailto:anajuliabraghim@gmail.com"><Button border>Enviar email</Button></a>
                </ContainerButtons>
            </ContainerTitles>
            <AboutMeSkills>
                <div className="AboutMeContainer">
                    <img src="" alt="foto de Ana Braghim" />
                    <div className="TextsAboutMe">
                        <p>Ana Júlia de Lima Braghim</p>
                        <p>Texto aqui sobre mim, esse é o sobre mim para eu contar minha experiencia</p>
                    </div>
                </div>
                <div className="Skills">
                    <div className="Skill">
                        <img src="" alt="imagem de HTML" />
                        <p>HTML</p>
                    </div>
                    <div className="Skill">
                        <img src="" alt="imagem de HTML" />
                        <p>HTML</p>
                    </div>
                    <div className="Skill">
                        <img src="" alt="imagem de HTML" />
                        <p>HTML</p>
                    </div>
                    <div className="Skill">
                        <img src="" alt="imagem de HTML" />
                        <p>HTML</p>
                    </div>
                    <div className="Skill">
                        <img src="" alt="imagem de HTML" />
                        <p>HTML</p>
                    </div>
                </div>
           </AboutMeSkills>
           <ServicesContainer>
                <TitleSection>Principais <span>serviços</span></TitleSection>
                <div className="Services">
                    <ServiceComponent/>
                    <ServiceComponent/>
                    <ServiceComponent/>
                    
                </div>
           </ServicesContainer>
           <ProjectsContainer>
                <TitleSection>Principais <span>projetos</span></TitleSection>
                <div className="Projects">
                    <ProjectComponent/>
                    <ProjectComponent/>
                    <ProjectComponent/>
                    <ProjectComponent/>
                    <ProjectComponent/>
                </div>
           </ProjectsContainer>
           <FooterComponent/>
        </div>
        
        
    )
}

