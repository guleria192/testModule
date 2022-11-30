const userLocation = document.getElementById('userLocation');
const userAccess = document.getElementById('userAccess');
const val = document.getElementById('errorOutput1')


function renderData(data){
    document.getElementById("location_ash").innerHTML = data.resolvedAddress
    document.getElementById("lat_ash").innerHTML = data.latitude
    document.getElementById("lon_ash").innerHTML = data.longitude
    document.getElementById("time_ash").innerHTML = data.timezone
    document.getElementById("winds_ash").innerHTML = data.currentConditions.windspeed
    document.getElementById("pres_ash").innerHTML = data.currentConditions.pressure
    document.getElementById("humi_ash").innerHTML = data.currentConditions.humidity
    document.getElementById("windd_ash").innerHTML = data.currentConditions.winddir
    document.getElementById("uv_ash").innerHTML = data.currentConditions.uvindex
    document.getElementById("feel_ash").innerHTML = data.currentConditions.feelslike


}


function submitData() {

    console.log(userLocation.value);
    console.log(userAccess.value);
    
    if(userLocation.value!== '' &&  userAccess.value !=='' ){    
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation.value}?unitGroup=metric&key=${userAccess.value}&contentType=json`
      fetch(url)
      .then((response) => response.json())
      .then((data) => renderData(data))
      .catch((error) => console.log(error))
      val.innerHTML = "";
    }
    else{
        val.innerHTML = " Both the fields must be field";
    }

}