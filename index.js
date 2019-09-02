
const ImageSrc = "images/car.jpg"; 

const classifier = ml5.imageClassifier("Mobilenet", () => {});

classifyImage();

function classifyImage() {
    classifier.predict(document.getElementById("image"), (err, results) => {
        if (err) {
            alert("Something went wrong");
        } else {
            let resultTxt = results[0].className;
            document.getElementById("result").innerText = resultTxt;
            
        };
    });
};

function changeOfImage() {
    const curFiles = document.getElementById("fileUploader").files;
    if (curFiles.length === 0) {
        image.src = ImageSrc;
        setTimeout(classifyImage, 100);
    }; 
};



function previewFile(){
       var preview = document.querySelector('img'); 
       var file    = document.querySelector('input[type=file]').files[0]; 
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); 
       } else {
           preview.src = "";
       }

    changeOfImage();
  }

  previewFile(); 




  
