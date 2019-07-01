import { GenericsExtend } from "./generics-extend";
import { MyGenerics } from "./my-generics";


interface FamillyData extends GenericsExtend{
        status:string;
}

export class NexGenGenerics extends MyGenerics<FamillyData>{


    test(){
        
    }

}