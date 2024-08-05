function entryChange(){
    if (document.getElementById('main-contact-type')){
        id = document.getElementById('main-contact-type').value;
        if(id=='レッスン'){
            document.getElementById('first-contact-type').style.display="";
            document.getElementById('second-contact-type').style.display="none";
        }
        else if(id !='レッスン'){
            document.getElementById('second-contact-type').style.display="";
            document.getElementById('first-contact-type').style.display="none";
        }
    }
}