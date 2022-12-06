import { AbstractControl } from "@angular/forms"
import { Observable, Observer, of } from "rxjs";

// as most of the parsing in the file occurs asynchronously

// If we return null it means that validation is successfull otherwise it means that there is

export const mimeType =(
  control :AbstractControl
  ): Promise<{ [key:string]: any}> |Observable<{[key:string]:any}> => {
    // inorder to send the the type of the promise as dynamic one need to type it in this way
    // it means that name of the string of the type need not be specified here
    // [key:string]:any

    if(typeof(control.value)==='string')
    {
      return of(null);
    }

  const file = control.value as File;
  const fileReader = new FileReader();
  let isValid=false;

  // fileReader.onloadend ()=>{}
  // the above code is the observaable there fore there is a need to convert it into either a observable or Promise

  const frObs =Observable.create((observer :Observer<{[key:string]:any}>)=>{

    fileReader.addEventListener("loadend",()=>{

      const arr= new Uint8Array(fileReader.result as ArrayBuffer).subarray(0,4);

      let header="";

      for(let i=0;i<arr.length;i++)
      {
        header+=arr[i].toString(16);
      }

      switch (header) {
        case "89504e47":
          isValid = true;
          break;
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
        case "ffd8ffe3":
        case "ffd8ffe8":
          isValid = true;
          break;
        default:
          isValid = false; // Or you can use the blob.type as fallback
          break;
      }
      if(isValid)
      {
        observer.next(null);
      }else{
        observer.next({invalidMineType:true})
      }
      observer.complete();
    });
    fileReader.readAsArrayBuffer(file);
  });
  return frObs;
};
