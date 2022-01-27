import React, { useEffect, useState, Fragment } from 'react';
import photo from '../../public/my_photo.jpg';
import telephone from '../../public/telephone.png';
import email from '../../public/email.png';
import github from '../../public/github.png';
import telegram from '../../public/telegram.png';
import './App.css';

export const App = () => {

    const [data, setData] = useState([]);

    const getData = () => {
        fetch(`http://localhost:${process.env.PORT}/getData`)
        .then(response => response.json())
        .then(data => setData(data));
    };

    useEffect(() => {
        getData();
    }, []);

    if(data.length === 0) {
        return (
            <div><p>Загрузка</p></div>
        );
    } else {
        return (
            <main>
                <div className='contactInfo'>
                    <div className='photo'>
                        <img src={photo} className='my-photo'/>
                    </div>
                    <div>
                        <h1>{data[0].name}</h1> 
                        <h2>{data[0].title}</h2>
                        <div className='social-network'>
                            <span><img src={telephone} />{data[0].telephone}</span>
                            <span><img src={email} />{data[0].email}</span>
                            <span><img src={github} />{data[0].github}</span>
                            <span><img src={telegram} />{data[0].telegram}</span>
                        </div>
                    </div>
                </div>
                <div className='experience-and-achievments'>
                    <h3>Опыт и достижения</h3>
                    <ul>
                        {data[0].achievements.map((achievement, ind) => {
                            return (
                                <li key={ind}>{achievement}</li>
                            );
                        })}
                    </ul>
                </div>
                <div className='education'>
                    <h3>Обучение</h3>
                    <div className='list-of-education'>
                        <div className='university-one'>
                            <span>2017 - 2021</span>
                            <h4>Российский химико-технологический университет им. Д.И. Менделеева</h4>
                            <span>Балавриат</span>
                            <span>«Факультет цифровых технологий и химического инжиниринга»</span>
                        </div>
                        <div className='university-two'>
                            <span>2021 - Н. В.</span>
                            <h4>Московский политехнический университет</h4>
                            <span>Магистратура</span>
                            <span>«Компьютерная лингвистика и искусственный интеллект»</span>
                        </div>
                    </div>
                </div>
                <div className='skills'>
                    <h3>Навыки</h3>
                    <ul className='list-of-skills'>
                        {
                            data[0].knowledgeAndSkills.map((skill, index) => {
                                return (
                                    <li key={index}>{skill}</li>
                                );
                            })
                        }
                    </ul>
                </div>
        </main>
        );
    }
};

