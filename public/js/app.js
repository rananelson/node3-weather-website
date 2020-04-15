console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#msg-1')
const msgTwo = document.querySelector('#msg-2')



const fetchWeather = (address) => {
    if(!address){
        msgOne.textContent = 'Error'
        msgTwo.textContent = 'no input found!! please add search keyword.'        
    }else{
        fetch('/weather?address='+address).then((res) => {
            res.json().then((data) => {
                if(data.error){
                    msgOne.textContent = 'Error'
                    msgTwo.textContent = 'Address not found!!'                    
                }else{
                    msgOne.textContent = data.location
                    msgTwo.textContent = data.forecast                    
                }
            })
        })
    }
}



weatherForm.addEventListener('submit',(e) => {
    e.preventDefault()   
    const location = search.value    
    msgOne.textContent = 'Loading...'
    msgTwo.textContent = ''
    fetchWeather(location)
})