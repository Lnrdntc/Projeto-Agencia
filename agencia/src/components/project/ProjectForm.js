import {useState, useEffect} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'


function ProjectForm( { handleSubmit, btnText, projectData } ) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method:"GET",
        headers: {
            "Content-Type": "aplication/json",
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch((err) => console.log(err))
    },[])

    const submit = (e) => {
        e.preventDefault()
        //console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({ 
            ...project, 
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
        }, })
    }

    return (

        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Local da viagem"
                name="name"
                placeholder="Insira o nome do ponto turistico/passeio"
                handleOnChange={handleChange}
                value={project.name ? project.name : ""}
            />

            <Input
                type="number"
                text="Orçamento da viagem"
                name="budget"
                placeholder="Insira o orçamento da viagem"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ""}
            />

            <div>
                <Select
                name="category_id" 
                text="Selecione o tipo de viagem"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ""}
                />
            </div>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm