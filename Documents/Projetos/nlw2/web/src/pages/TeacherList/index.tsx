import React from 'react';
import PageHeader from '../../components/PageHeader';
import './style.css';
import TeacherItem from "../../components/TeacherItem";

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matérias</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

        <main>
        <TeacherItem
          avatar="https://avatars1.githubusercontent.com/u/11545272?s=460&u=f202f315e868a0ac7b0dde8372a506864ec7af9d&v=4"
          name="Renan"
          subject="Programação"
          subtitle="Estudante programação"
          description="Gosta aprender coisas novas, neste momento está focado em repassar seus conhecimentos em diversas tecnologias."
          price={100}
          phone="5521971874303"
        />
      </main>
        </div>
    )
}

export default TeacherList;