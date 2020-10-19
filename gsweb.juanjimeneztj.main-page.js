$(document).ready(function(){
    let gsweb_ck = Cookies.get('gsweb_visit_week');
    let gsweb_cktd = Cookies.get('gsweb_visit_week_td');
    
    if(gsweb_ck){
        if(gsweb_cktd){
            console.log('Already registrated');
        }else{
            GSWEB_hideModal();
        }
    }else{
        GSWEB_init();
    }
    // Cookies.remove('gsweb_visit_week');
});

function GSWEB_hideModal(){
    setInterval(() => {
        $('.elementor-popup-modal').hide();
    }, 500);
}

function GSWEB_init(){
    Cookies.set('gsweb_visit_week','1',{expires: Math.random() * (7 - 1) + 1 });
    Cookies.set('gsweb_visit_week_td','1',{expires: 1 });
}