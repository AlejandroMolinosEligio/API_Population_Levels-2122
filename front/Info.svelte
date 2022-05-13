<main>
    <br>
    <h1 style="text-align: center;">API POPULATION LEVELS</h1>
    <br><br>
    <p>Esta API actualmente contiene un total de 25 datos, con las claves asociadas de país y año. Los datos por defecto ya están inicializados, no obstante sigue existiendo la petición para cargar los datos desde la URL:
        <a href="https://api-population-levels.herokuapp.com/api/v2/loadInitialData">https://api-population-levels.herokuapp.com/api/v2/loadInitialData</a>
    </p>
    <br>
    <ul>
        <li><b>GET</b></li>
        <ul>
            <li>Parámtros (query) disponibles: limit, offset,from,to</li>
            <li>Parámetros (params) disponibles: year,country</li>
            <li><b>Ejemplos:</b></li>
            <ul>
                <li><a href="https://api-population-levels.herokuapp.com/api/v2/population_levels">Para listado de todos los recursos: https://api-population-levels.herokuapp.com/api/v2/population_levels</a></li>
                <li><a href="https://api-population-levels.herokuapp.com/api/v2/population_levels/spain">Para recursos por país: https://api-population-levels.herokuapp.com/api/v2/population_levels/spain</a></li>
                <li><a href="https://api-population-levels.herokuapp.com/api/v2/population_levels?year=2019">Para recursos por año:https://api-population-levels.herokuapp.com/api/v2/population_levels?year=2019</a></li>
                <li><a href="https://api-population-levels.herokuapp.com/api/v2/population_levels?from=2012&to=2019">Para recursos por año: https://api-population-levels.herokuapp.com/api/v2/population_levels?from=2012&to=2019</a></li>
                <li><a href="https://api-population-levels.herokuapp.com/api/v2/population_levels/spain/2019">Para recursos por país y año: https://api-population-levels.herokuapp.com/api/v2/population_levels/spain/2019</a></li>
            </ul>
        </ul>
        <br>
        <li><b>POST</b></li>
        <ul>
            <li>Para el método POST he uttiliado un comprobador para los parámetros introduccidos, estos deben serlos siguientes: counrty,year,death_rate,life_expectancy_birth,birth_rate
                . Estos parámetros son numéricos a excepción del country que es una cadena de carácteres.
            </li>
            <li><b>Ejemplo datos(body):</b></li>
            <ul>
                <li>
                    (<br>
                    "country": "spain",<br>
                    "year": 2019,<br>
                    "death_rate": 10.42,<br>
                    "life_expectancy_birth": 98.23,<br>
                    "birth_rate": 15.56<br>
                    )</li>
            </ul>
            <li>Las peticiones de POST solo pueden realizarse al conjunto de datos, es decir solo a la URL base, no se podrá utilizar para un recurso específico</li>
        </ul>
        <br>
        <li><b>UPDATE</b></li>
        <ul>
            <li>Para el método UPDATE he vuelto a utilizar el mismo comprobador para los parámetros introduccidos, estos deben serlos siguientes: counrty,year,death_rate,life_expectancy_birth,birth_rate
                . Estos parámetros son numéricos a excepción del country que es una cadena de carácteres.
            </li>
            <li><b>Ejemplo datos(body):</b></li>
            <ul>
                <li>(<br>
                    "country": "spain",<br>
                    "year": 2019,<br>
                    "death_rate": 13.42,<br>
                    "life_expectancy_birth": 78.23,<br>
                    "birth_rate": 11.56<br>
                )</li>
            </ul>
            <li>Las peticiones de UPDATE solo pueden realizarse a un recurso específico pasado los datos a través del <b>body</b>.
            Por ejemplo: https://api-population-levels.herokuapp.com/api/v2/population_levels/spain/2019</li>
        </ul>
        <br>
    </ul>
    <br>
    <b>PARA CUALQUIER OTRA DUDA ESCRIBID EN EL LINK DE SLACK: </b><a href="https://app.slack.com/client/T98L0R2T1/C03F8JKFAER">https://app.slack.com/client/T98L0R2T1/C03F8JKFAER</a>
    <br>
    <b>DOCUMENTACIÓN: </b><a href="https://documenter.getpostman.com/view/20091922/UVsQrixc">https://documenter.getpostman.com/view/20091922/UVsQrixc</a>
    <br>
</main>