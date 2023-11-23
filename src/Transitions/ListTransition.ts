import gsap from 'gsap'

export function onBeforeEnter(el: any) {
    el.style.opacity = '0';
    el.style.height = '0';
}

export function onEnter(el: any, done?: gsap.Callback) {
    const index: number = getIndex(el);
    
    gsap.to(el, {
        opacity: 1,
        height: '1.6em',
        delay: index  * 0.15,
        onComplete: done
    })
}

export function onLeave(el: any, done?: gsap.Callback) {
    const index: number = getIndex(el);

    gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: index * 0.15,
        onComplete: done
    })
}

function getIndex(el: any): number {
    let index = el.dataset.index 
        ? el.dataset.index
        : 0;

    return index as number;
}