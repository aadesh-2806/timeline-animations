var animation = anime.timeline({
    autoplay: false
});

animation
    .add({
        targets: '.btn',
        top: '1500px',
        duration: 500,
        easing: 'easseInOutSine'
    })
    .add({
        targets: '#stars',
        top: '0px',
        duration: 1000,
        easing: 'easseInOutSine'
    })
    .add({
        targets: '#mountain',
        bottom: '0px',
        duration: 1000,
        easing: 'easseInOutSine'
    })
    .add({
        targets: '#moon',
        top: '0px',
        duration: 1000,
        easing: 'easseInOutSine'
    })
    .add({
        targets: '#mountains',
        bottom: '0px',
        duration: 1000,
        easing: 'easseInOutSine'
    })
    .add({
        targets: '#text',
        marginRight: '0px',
        duration: 1000,
        easing: 'easseInOutSine'
    })
    .add({
        targets: '.btn',
        top: '50%',
        duration: 1000,
        easing: 'easseInOutSine'
    })

document.querySelector('.btn').onclick = animation.play;