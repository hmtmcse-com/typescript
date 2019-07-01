import { GenericsExtend } from "./generics-extend";
import { FatherGenerics } from "./father-generics";


export class MyGenerics<F extends GenericsExtend> extends FatherGenerics<F> {

}