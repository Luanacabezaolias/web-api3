import {} from 'react'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'

function Estatistica(){

    const data = [
        {Produto:1, valor:1000},
        {Produto:2, valor:900},
        {Produto:3, valor:800},
        {Produto:4, valor:700},
    ]

    return(
        <div>
            <VictoryChart

            //padding
            domainPadding={30}
            >
            <VictoryAxis
                tickValues={[1,2,3,4]}
                tickFormat={["Produto 1","Produto 2","Produto 3","Produto 4"]}
            />

            <VictoryAxis
                dependentAxis
                tickFormat={(x)=>(`R$ ${x /100}`)}
            />


                <VictoryBar
                data = {data}
                x = "Produto"
                y = "valor"
                />

            </VictoryChart>
        </div>
    )
}
export default Estatistica