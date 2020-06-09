//===================================================== SCRIPT PARA O MENU MOBILE =====================================================
window.onload = function() {
    document.querySelector(".menuMobile").addEventListener("click", function() {
        if(document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';
        } else {
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    });
};
//=========================================================== MODAL PATIENT ============================================================
function iniciaModalPatient(modalPatientID) {
    const modalPatient = document.getElementById(modalPatientID);
    if(modalPatient) {
        modalPatient.classList.add('mostrar-modal-patient');
        modalPatient.addEventListener('click', (e) => {
            if(e.target.id == modalPatientID || e.target.className == 'fechar-modal-patient') {
                modalPatient.classList.remove('mostrar-modal-patient');
            }
        });
    }
}
const menuPatient = document.querySelector('.banner-menu--patient');
menuPatient.addEventListener('click', () => iniciaModalPatient('modal-patient-login'));
