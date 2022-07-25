import React from 'react'
import './Form.css'

class Form extends React.Component {
 state = {
          name: '',
          surname: '',
          date: '',
          phone: '',
          web: '',
          personal: '',
          stack: '',
          project: '',

          formErrors: {name: '',
                        surname: '',
                        date: '',
                        phone: '',
                        web: '',
                        personal: '',
                        stack: '',
                        project: ''
                    },
          nameValid: false,
          surnameValid: false,
          dateValid: false,
          phoneValid: false,
          webValid: false,
          personalValid: false,
          stackValid: false,
          projectValid: false,
          formValid: false
    }

    hadleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault()
    }

    render() {
        return (
            <>
                <form onSubmit={e => this.onSubmit(e)}>
                    <label htmlFor="Имя">Имя*</label>
                    <input type="text" name='name' className="text" id="Имя" placeholder='Имя' value={this.state.name} onChange={e => this.hadleInput(e)} />
                    <span className="validity"> {this.state.formErrors.name} </span>

                    <label htmlFor="Фамилия">Фамилия*</label>
                    <input type="text" name='surname' className="text" id="Фамилия" placeholder='Фамилия' value={this.state.surname} onChange={e => this.hadleInput(e)} />
                    {/* <span className="validity"> {this.formErrors.surname} </span> */}

                    <label htmlFor="Дата">Дата рождения*</label>
                    <input type="date" name='date' className="text" id="Дата"  min="1930-01-01" placeholder='Дата рождения' value={this.state.date} onChange={e => this.hadleInput(e)} />
                    {/* <span className="validity"> {this.formErrors.date} </span> */}

                    <label htmlFor="Телефон">Телефон*</label>
                    <input type="tel" name='phone' className="text" id="Телефон" placeholder='Телефон' value={this.state.phone} onChange={e => this.hadleInput(e)} />
                    {/* <span className="validity"> {this.formErrors.phone} </span> */}

                    <label htmlFor="Сайт">Сайт*</label>
                    <input type="text" name='web' className="text" id="Сайт" placeholder='Сайт' value={this.state.web} onChange={e => this.hadleInput(e)} />
                    {/* <span className="validity"> {this.formErrors.web} </span> */}

                    <textarea name='personal' id="personal" cols="30" rows="7" placeholder='Напишите о себе...' value={this.state.personal} onChange={e => this.hadleInput(e)} ></textarea>
                    {/* <span className="validity"> {this.formErrors.personal} </span> */}

                    <textarea name='stack' id="stack" cols="30" rows="7" placeholder='Стек технологий' value={this.state.stack} onChange={e => this.hadleInput(e)} ></textarea>
                    {/* <span className="validity"> {this.formErrors.stack} </span> */}

                    <textarea name="project" id="project" cols="30" rows="7" placeholder='Описание последнего проекта' value={this.state.project} onChange={e => this.hadleInput(e)} ></textarea>
                    {/* <span className="validity"> {this.formErrors.project} </span> */}

                    <span className="require">*обязательное поле</span>
                    <div className="btn-container">
                        <button type="reset">Отмена</button>
                        <button type="submit">Сохранить</button>
                    </div>
                </form>
            </>

        )
    }
}

export default Form