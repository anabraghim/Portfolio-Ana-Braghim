import React from 'react'
import {ContainerTitles, Title1, SpanTitle1, ContainerButtons, Button, AboutMeSkills, TitleSection , ServicesContainer, ProjectsContainer} from "./style"
import { FooterComponent } from '../../components/footer'
import { ServiceComponent } from '../../components/service'
import { ProjectComponent } from '../../components/project'
import { SkillComponent } from '../../components/skill'
import { services } from '../../data/servicesData'
import { projects } from '../../data/projectsData'
import { skills } from '../../data/skills'
import { HeaderMobileComponent } from '../../components/headerMobile/header'
import { HeaderDesktopComponent } from '../../components/headerDesktop'

export function Home(){
    return(
        <div>
            <HeaderMobileComponent  className='scale'/> 
            <HeaderDesktopComponent/>
           <ContainerTitles id='home'>
                <Title1>Como posso te <SpanTitle1>ajudar?</SpanTitle1></Title1>
                <p className='title2'>Desenvolvimento de sites limpos, rápidos e funcionais.</p>
                <ContainerButtons>
                    <a href="public/resume.pdf"><Button className='scale' color="true">Baixar currículo</Button></a>
                    <a href="mailto:anajuliabraghim@gmail.com"><Button className='scale' $border="true">Enviar email</Button></a>
                </ContainerButtons>
            </ContainerTitles>
            <AboutMeSkills>
                <div className="AboutMeContainer scale" >
                    <img src="src/assets/images/anabraghim1.jpg" alt="foto de Ana Braghim" />
                    <div className="TextsAboutMe">
                        <p className='name'>Ana Júlia de Lima Braghim</p>
                        <p>Sou estudante de Sistemas de Informação na Universidade Federal de Mato Grosso do Sul (UFMS), com 19 anos e apaixonada pela área de desenvolvimento. Como desenvolvedora front-end freelancer, dedico-me a criar sites que não apenas funcionam perfeitamente, mas também proporcionam uma experiência de usuário excepcional. Busco uma oportunidade em uma empresa inovadora e dinâmica onde possa contribuir significativamente e crescer profissionalmente. Acredito que a organização e a fácil manutenção são a chave para projetos duradouros e de qualidade.</p>
                    </div>
                </div>
                <div className="Skills">
                    {skills.map((skill, index)=>(
                        <SkillComponent key={index} skill={skill}/>
                    ))}
                </div>
           </AboutMeSkills>
           <ServicesContainer id='services'>
                <TitleSection>Principais <span>serviços</span></TitleSection>
                <div className="Services">
                    {services.map((service, index)=> (
                        <ServiceComponent key={index} service={service}/>
                    ))}
                </div>
           </ServicesContainer>
           <ProjectsContainer id='projects'>
                <TitleSection>Principais <span>projetos</span></TitleSection>
                <div className="Projects">
                    {projects.map((project, index)=>(
                        <ProjectComponent key={index} project={project}/>
                    ))}
                    
                </div>
           </ProjectsContainer>
           <FooterComponent/>
        </div>
        
        
    )
}

