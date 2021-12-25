import React from 'react'

export default function About() {
    return (
        <div>
            <div className="jumbotron my-4 py-4">
                <h1 className="display-4"><u>TextiFy</u></h1>
                <p className="lead">TextiFy is a Text Analyser made for the purpose of analysing and
                    manipulating texts, searching words using search bar, and give statistics about the
                    articles like reading time, number of words etc. This is made using React framework and Boostrap
                    is used for styling.
                </p>
                <hr className="my-4" />
                <p>Developed by Avikal Goel, student of Delhi Technological University, class of 2023</p>
            </div>


            <div className="row mb-2 in-center">


                <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-success">Creator</strong>
                            <h3 className="mb-0">
                                <a className="text-dark" target="_blank" href="https://www.linkedin.com/in/avikal-goel-567971199/">Avikal Goel</a>
                            </h3>
                            <div className="mb-1 text-muted">24th December 2021</div>
                            <p className="card-text mb-auto">This app is created to get a first hand experience on React tech stack, and
                                it serves the users to  write, preview, analyse their articles and even google search the words using the
                                functional search bar on the navigation pane.</p>

                            <a target="_blank" href="https://www.linkedin.com/in/avikal-goel-567971199/">Contact Me</a>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}