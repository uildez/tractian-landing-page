import React, { useState, useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import './testimonials.scss';


import leftArrow from "../../assets/images/arrow-left.svg";
import rightArrow from "../../assets/images/arrow-right.svg";


const testimonials = [
    {
      name: "Tiago Junqueira",
      title: "Supervisor de Manutenção Geral - AmstedMaxion",
      image: "https://images.unsplash.com/photo-1582441814869-a262426017f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      quote:
        "Antes da Tractian, a falha acontecia sem que nós tivéssemos nenhuma chance de reação. Agora nós conseguimos identificar qualquer anomalia fora do normal e isso nos permite fazer a intervenção antes que a quebra aconteça.",
    },
    {
      name: "Eduarda Buaiz",
      title: "Diretora Geral - Indústria Alimentícia",
      image: "https://image.freepik.com/fotos-gratis/contente-trabalhadora-de-fabrica-em-pe-com-um-tablet-e-olhando-para-longe_74855-16355.jpg",
      quote:
      "O dispositivo traz mais confiabilidade ao processo, agilizando a análise de informações e evitando paradas na produção, o que impacta positivamente a produtividade."},
    {
      name: "Renê Santos",
      title: "Técnico Mecânico - Indústria Cervejeira",
      image: "https://static.vecteezy.com/ti/fotos-gratis/p1/1131323-trabalhador-na-fabrica-foto.jpg",
      quote:
        "Uma criança pode instalar o sensor da Tractian, e a plataforma é tão fácil de usar quanto uma rede social. Todo sistema é muito simples e confiável."
    }
  ];
  
  function Testimonials() {
    let imageList = useRef(null);
    let testimonialList = useRef(null);
    const imageWidth = 340;
  
    const [state, setState] = useState({
      isActive1: true,
      isActive2: false,
      isActive3: false
    });
  
    useEffect(() => {
      gsap.to(testimonialList.children[0], 0, {
        opacity: 1
      });
    }, []);
  
    //Image transition
    const slideLeft = (index, duration, multiplied = 1) => {
      gsap.to(imageList.children[index], duration, {
        x: -imageWidth * multiplied,
        ease: Power3.easeOut
      });
    };
  
    const slideRight = (index, duration, multiplied = 1) => {
      gsap.to(imageList.children[index], duration, {
        x: imageWidth * multiplied,
        ease: Power3.easeOut
      });
    };
  
    const scale = (index, duration) => {
      gsap.from(imageList.children[index], duration, {
        scale: 1.2,
        ease: Power3.easeOut
      });
    };
  
    //Content transition
  
    const fadeOut = (index, duration) => {
      gsap.to(testimonialList.children[index], duration, {
        opacity: 0
      });
    };
  
    const fadeIn = (index, duration) => {
      gsap.to(testimonialList.children[index], duration, {
        opacity: 1,
        delay: 1
      });
    };
  
    const nextSlide = () => {
      if (imageList.children[0].classList.contains("active")) {
        setState({ isActive1: false, isActive2: true });
        //Image transition
        slideLeft(0, 1);
        slideLeft(1, 1);
        scale(1, 1);
        slideLeft(2, 1);
        slideLeft(2, 0);
        fadeOut(0, 1);
        fadeIn(1, 1);
      } else if (imageList.children[1].classList.contains("active")) {
        setState({ isActive2: false, isActive3: true });
        //Image transition
        slideRight(0, 1);
        slideLeft(1, 1, 2);
        slideLeft(2, 1, 2);
        scale(2, 1);
        //content transition
        fadeOut(1, 1);
        fadeIn(2, 1);
      } else if (imageList.children[2].classList.contains("active")) {
        setState({ isActive1: true, isActive3: false });
        //Image transition
        slideLeft(2, 1, 3);
        slideLeft(0, 1, 0);
        slideLeft(1, 0, 0);
        scale(0, 1);
        //content transition
        fadeOut(2, 1);
        fadeIn(0, 1);
      }
    };
  
    const prevSlide = () => {
      if (imageList.children[0].classList.contains("active")) {
        setState({ isActive1: false, isActive3: true });
        //Image transition
        slideLeft(2, 0, 3);
        slideLeft(2, 1, 2);
        scale(2, 1);
        slideRight(0, 1);
        slideRight(1, 1);
        //content transtion
        fadeOut(0, 1);
        fadeIn(2, 1);
      } else if (imageList.children[1].classList.contains("active")) {
        setState({ isActive2: false, isActive1: true });
        //Image transition
        slideLeft(0, 0);
        slideRight(0, 1, 0);
        slideRight(1, 1, 0);
        slideRight(2, 1, 2);
        scale(0, 1);
        //content transtion
        fadeOut(1, 1);
        fadeIn(0, 1);
      } else if (imageList.children[2].classList.contains("active")) {
        setState({ isActive2: true, isActive3: false });
        slideLeft(2, 1);
        slideLeft(1, 0, 2);
        slideLeft(1, 1);
        scale(1, 1);
        //content transtion
        fadeOut(2, 1);
        fadeIn(1, 1);
      }
    };
  
    return (
      <div className="testimonial-section">
        <div className="testimonial-container">
          <div onClick={prevSlide} className="arrows left">
            <span>
              <img src={leftArrow} alt="left arrow" />
            </span>
          </div>
          <div className="inner">
            <div className="t-image">
              <ul ref={el => (imageList = el)}>
                <li className={state.isActive1 ? "active" : ""}>
                  <img src={testimonials[0].image} alt={testimonials[0].name} />
                </li>
                <li className={state.isActive2 ? "active" : ""}>
                  <img src={testimonials[1].image} alt={testimonials[0].name} />
                </li>
                <li className={state.isActive3 ? "active" : ""}>
                  <img src={testimonials[2].image} alt={testimonials[0].name} />
                </li>
              </ul>
            </div>
            <div className="t-content">
              <ul ref={el => (testimonialList = el)}>
                <li className={state.isActive1 ? "active" : ""}>
                  <div className="content-inner">
                    <p className="quote">{testimonials[0].quote}</p>
                    <h3 className="name">{testimonials[0].name}</h3>
                    <h4 className="title">{testimonials[0].title}</h4>
                  </div>
                </li>
                <li className={state.isActive2 ? "active" : ""}>
                  <div className="content-inner">
                    <p className="quote">{testimonials[1].quote}</p>
                    <h3 className="name">{testimonials[1].name}</h3>
                    <h4 className="title">{testimonials[1].title}</h4>
                  </div>
                </li>
                <li className={state.isActive3 ? "active" : ""}>
                  <div className="content-inner">
                    <p className="quote">{testimonials[2].quote}</p>
                    <h3 className="name">{testimonials[2].name}</h3>
                    <h4 className="title">{testimonials[2].title}</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="arrows right" onClick={nextSlide}>
            <img src={rightArrow} alt="right arrow" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Testimonials;