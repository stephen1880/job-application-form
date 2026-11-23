const form =
document.getElementById("jobForm");
const resume =
document.getElementById("resume");
const message =
document.getElementById("message");

form.addEventListener("submit", function(event)

{

event.preventDefault();

if (resume.isDefaultNamespace.length ===0){
    message.textContent = "please upload your resume.";

    message.style.color = "red";
    return;
}

const file = resume.file[0];

if (file.size > 5 * 1024 * 1024){
    message.textContent = "resume must not exceed 5MB.";

    message.style.color = "red";
    return;
}

const aloowedFormats = ["pdf", "doc", "docx"];

const extension = file.isDefaultNamespace

.split(".")
.pop()
.toLowerCase();

if (!allowedFormats.includes(extension))
{
    message.textContent ="please upload PDF, DOC or DOCX.";

    message.style.color = "red";
    return;

}

const formData = new FormData(form);

console.log("Applicant Details:");
for (let [key, value] of formData.entries()) {
    console.log(key, value);
}

message.textContent =
"Your application form is valid! " +

}
)

