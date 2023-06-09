document.getElementById("btn").addEventListener("click",function(){
                navigator.geolocation.getCurrentPosition((position)=>{
                                let lat=position.coords.latitude
                                let lon=position.coords.longitude
                                console.log(lat,lon)
                })
})