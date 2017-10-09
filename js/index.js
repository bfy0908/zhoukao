/**
 * Created by Administrator on 2017/10/9.
 */
var str=[1,2,4,3,6,4,7,8,5,4,6,9,0,72];
function uniqu(arr){
    var len=arr.length;
    var result=[];
    for(var i=0;i<len;i++){
       var flge=true;
        for(var j= i;j<arr.length-1;j++){
            if(arr[i]==arr[j+1]){
                flge=false;
                break;
            }
        }
        if(flge){
            result.push(arr[i])
        }
    }
    return result;
}

function arrs(arr){
    var result=[];
    for(var i=0;i<arr.length;i++){
        if(result.indexOf(arr[i])==-1){
            result.push(arr[i])
        }
    }
    return result;
}