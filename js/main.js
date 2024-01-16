const counsel_btn = document.querySelector(".support-counsel-btn");
const counsel_data_text = document.querySelector(".addFile span.data");
const file_btn = document.querySelector("#file_btn");



counsel_btn.addEventListener("click",()=>{
    console.log(counsel_data_text)
    file_btn.click();
});

file_btn.addEventListener("change",()=>{
    counsel_data_text.textContent = file_btn.files[0].name;
});