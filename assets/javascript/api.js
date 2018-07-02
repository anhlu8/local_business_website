var key;

$('#addApi').on("click", function(){
     key = document.getElementById("apiKey").value;
     console.log(key)
     localStorage.setItem("key", key);
     console.log(localStorage.getItem("key"))
})