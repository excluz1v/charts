export function* loginWorker (action){
    const {payload} = action
    console.log(payload)
}
