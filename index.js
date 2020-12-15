const origem = document.getElementById('origem')
const destino = document.getElementById('destino')
const tempo = document.getElementById('tempo')
const calcular = document.getElementById('calcular')
const semFaleMais = document.getElementById('resultado1')
const comFaleMais30 = document.getElementById('resultado2')
const comFaleMais60 = document.getElementById('resultado3')
const comFaleMais120 = document.getElementById('resultado4')


function de011a016(){
    if(origem.value == '011' && destino.value == '016'){
        semFaleMais.innerHTML= `R$ ${(Number(tempo.value)* 1.90).toFixed(2)}`

            if(tempo.value < Number(30)){
                comFaleMais30.innerHTML = `R$ 0.00`
                comFaleMais60.innerHTML = `R$ 0.00`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= '30' && tempo.value < 60){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 1.90 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ 0.00`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= '60' && tempo.value < 120){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 1.90 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ ${(Number(tempo.value - 60)* 1.90 *1.1).toFixed(2)}`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= 120 ){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 1.90 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ ${(Number(tempo.value - 60)* 1.90 *1.1).toFixed(2)}`
                comFaleMais120.innerHTML = `R$ ${(Number(tempo.value - 120)* 1.90 *1.1).toFixed(2)}`
            }

}}

function de016a011(){
    if(origem.value == '016' && destino.value == '011'){
        semFaleMais.innerHTML= `R$ ${(Number(tempo.value)* 2.90).toFixed(2)}`

            if(tempo.value < Number(30)){
                comFaleMais30.innerHTML = `R$ 0.00`
                comFaleMais60.innerHTML = `R$ 0.00`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= '30' && tempo.value < 60){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 2.90 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ 0.00`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= '60' && tempo.value < 120){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 2.90 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ ${(Number(tempo.value - 60)* 2.90 *1.1).toFixed(2)}`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= 120 ){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 2.90 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ ${(Number(tempo.value - 60)* 2.90 *1.1).toFixed(2)}`
                comFaleMais120.innerHTML = `R$ ${(Number(tempo.value - 120)* 2.90 *1.1).toFixed(2)}`
            }

}}


function de011a017(){
    if(origem.value == '011' && destino.value == '017'){
        semFaleMais.innerHTML= `R$ ${(Number(tempo.value)* 1.70).toFixed(2)}`

            if(tempo.value < Number(30)){
                comFaleMais30.innerHTML = `R$ 0.00`
                comFaleMais60.innerHTML = `R$ 0.00`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= '30' && tempo.value < 60){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 1.70 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ 0.00`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= '60' && tempo.value < 120){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 1.70 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ ${(Number(tempo.value - 60)* 1.70 *1.1).toFixed(2)}`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= 120 ){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 1.70 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ ${(Number(tempo.value - 60)* 1.70 *1.1).toFixed(2)}`
                comFaleMais120.innerHTML = `R$ ${(Number(tempo.value - 120)* 1.70 *1.1).toFixed(2)}`
            }

}}


function de017a011(){
    if(origem.value == '017' && destino.value == '011'){
        semFaleMais.innerHTML= `R$ ${(Number(tempo.value)* 2.70).toFixed(2)}`

            if(tempo.value < Number(30)){
                comFaleMais30.innerHTML = `R$ 0.00`
                comFaleMais60.innerHTML = `R$ 0.00`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= '30' && tempo.value < 60){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 2.70 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ 0.00`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= '60' && tempo.value < 120){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 2.70 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ ${(Number(tempo.value - 60)* 2.70 *1.1).toFixed(2)}`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= 120 ){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 2.70 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ ${(Number(tempo.value - 60)* 2.70 *1.1).toFixed(2)}`
                comFaleMais120.innerHTML = `R$ ${(Number(tempo.value - 120)* 2.70 *1.1).toFixed(2)}`
            }

}}


function de011a018(){
    if(origem.value == '011' && destino.value == '018'){
        semFaleMais.innerHTML= `R$ ${(Number(tempo.value)* 0.90).toFixed(2)}`

            if(tempo.value < Number(30)){
                comFaleMais30.innerHTML = `R$ 0.00`
                comFaleMais60.innerHTML = `R$ 0.00`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= '30' && tempo.value < 60){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 0.90 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ 0.00`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= '60' && tempo.value < 120){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 0.90 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ ${(Number(tempo.value - 60)* 0.90 *1.1).toFixed(2)}`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= 120 ){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 0.90 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ ${(Number(tempo.value - 60)* 0.90 *1.1).toFixed(2)}`
                comFaleMais120.innerHTML = `R$ ${(Number(tempo.value - 120)* 0.90 *1.1).toFixed(2)}`
            }

}}


function de018a011(){
    if(origem.value == '011' && destino.value == '016'){
        semFaleMais.innerHTML= `R$ ${(Number(tempo.value)* 1.90).toFixed(2)}`

            if(tempo.value < Number(30)){
                comFaleMais30.innerHTML = `R$ 0.00`
                comFaleMais60.innerHTML = `R$ 0.00`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= '30' && tempo.value < 60){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 1.90 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ 0.00`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= '60' && tempo.value < 120){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 1.90 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ ${(Number(tempo.value - 60)* 1.90 *1.1).toFixed(2)}`
                comFaleMais120.innerHTML =`R$ 0.00`
            }

            if(tempo.value >= 120 ){
                comFaleMais30.innerHTML = `R$ ${(Number(tempo.value - 30)* 1.90 *1.1).toFixed(2)}`
                comFaleMais60.innerHTML = `R$ ${(Number(tempo.value - 60)* 1.90 *1.1).toFixed(2)}`
                comFaleMais120.innerHTML = `R$ ${(Number(tempo.value - 120)* 1.90 *1.1).toFixed(2)}`
            }

}}


calcular.addEventListener('click',()=>{
 
        de011a016()
        de016a011()
        de011a017()
        de017a011()
        de011a018()
        de018a011()

   
})


