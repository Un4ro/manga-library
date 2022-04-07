import React from "react"

const AboutPage = () => {
    return (
        <div class="jumbotron jumbotron-fluid my-5">
            <div style={{maxWidth: '800px'}} class="container">
                <h1 class="display-4">О нас</h1>
                <p class="lead">Мы, а точнее я начинающий JavaScript разработчик, который решил начать изучать React, Postgre, express и подобные замысловатые вещи...</p>
                <hr class="my-4" />
                <p>Приветсвую каждого зашедшего на эту страницу, этот сайт создан для просмотра различных электронных изданий. 
                    Сейчас здесь довольно скромный функционал, в планах ожидается его расширение. 
                    Прошу и дальше следить за активностью данного сайта.
                </p>
            </div>
        </div>
    )
}

export default AboutPage