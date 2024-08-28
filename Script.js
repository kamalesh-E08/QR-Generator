let qrCodeInstance;

function generateQRCode() { 
    let url = document.getElementById("url").value; 
    let qrcodeContainer = document.getElementById("qrcode");

    qrcodeContainer.innerHTML = "";

    qrCodeInstance = new QRCode(qrcodeContainer, {
        text: url,
        width: document.getElementById("qrSize").value,
        height: document.getElementById("qrSize").value,
        colorLight: "#ffffff"
    });
}

function saveQRCode() {
    let qrcodeContainer = document.getElementById("qrcode").getElementsByTagName("img")[0];
    
    if (qrcodeContainer) {
        let link = document.createElement("a");
        link.href = qrcodeContainer.src;
        link.download = "qrcode.png"; 

        link.click();

        document.getElementById("qrcode").innerHTML = "";
    } else {
        alert("Please generate a QR code first!");
    }
}
