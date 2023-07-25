setTimeout(() => {
    import('./async-a').then(() => {
        console.log('async a loaded');
    })

    import('./async-b').then(() => {
        console.log('async b loaded');
    })

}, 1000)
