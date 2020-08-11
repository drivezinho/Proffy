import React from 'react';
import PageHeader from '../../components/PageHeader';
import './style.css';
import TeacherItem from "../../components/TeacherItem";
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select 
                        name="subject" 
                        label="Materia"
                        options={[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Biologia', label: 'Bilogia'},
                            { value: 'Ciências', label: 'Ciências'},
                            { value: 'Educação Física', label: 'Educação Física'},
                            { value: 'Física', label: 'Física'},
                            { value: 'Geografia', label: 'Geografia'},
                            { value: 'Matemática', label: 'Matemática'},
                            { value: 'História', label: 'Artes'},
                            { value: 'Português', label: 'Português'},
                            { value: 'Química', label: 'Química'},
                        ]}
                    />
                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        options={[
                            { value: '0', label: 'Domingo'},
                            { value: '1', label: 'Segunda'},
                            { value: '2', label: 'Terça'},
                            { value: '3', label: 'Quarta'},
                            { value: '4', label: 'Quinta'},
                            { value: '5', label: 'Sexta'},
                            { value: '6', label: 'Sabado'},
                        ]}
                    />
                    <Input type="time" name="time" label="Hora" />
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