export default function (state=0, action){

	switch (action.type){
		case "plan-selected":
		   return action.payload;
		   default:
		   return state;
	}
}

