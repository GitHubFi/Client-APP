// import {AsyncStorage} from 'react-native'
// let userSession = {};
// export const loadState = async () => {
//     try {
//         const serializedState = await AsyncStorage.getItem('state') ;
//         if (serializedState === null) {
//             return undefined;
//         }
//         console.log(JSON.parse(serializedState),'loadstate')
//         return JSON.parse(serializedState)
//     }
//     catch (err) {
//         return undefined
//         console.log(err,"error when load state ")
//     }
// }

//  loadState()

// export const saveState = async (state)=>{
//     try{
//         const serializedState = JSON.stringify(state);
//        await AsyncStorage.setItem('state',serializedState);
//     }
//     catch(err){
//         console.log(err,"error when save state in persist")

//     }
// }