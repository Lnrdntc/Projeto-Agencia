import {useState} from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'


function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState({})

    function submit(e){

        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)

    }

    function handleChange(e) {

        setService({ ...service, [e.target.name]: e.target.value})

    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
            type="text"
            text="Nome do passeio"
            name="name"
            placeholder="Insira o nome do passeio que deseja"
            handleOnChange={handleChange}
            />

            <Input 
            type="number"
            text="Custo do passeio"
            name="cost"
            placeholder="Insira o valor total do passeio"
            handleOnChange={handleChange}
            />

            <Input 
            type="text"
            text="Descrição do passeio"
            name="description"
            placeholder="Descreva o que terá no passeio (ex: passeio de barco para 2 pessoas)"
            handleOnChange={handleChange}
            />

            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ServiceForm