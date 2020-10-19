$(document).ready(function(){
    let gsweb_ck = Cookies.get('gsweb_visit_week');
    
    if(gsweb_ck){
        GSWEB_hideModal();
    }else{
        GSWEB_init();
    }
});

function GSWEB_hideModal(){
    setInterval(() => {
        $('.elementor-popup-modal').hide();
    }, 500);
}

function GSWEB_init(){
    Cookies.set('gsweb_visit_week','1',{expires: Math.random() * (7 - 1) + 1 });
}