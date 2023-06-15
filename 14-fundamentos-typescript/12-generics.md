# Generics

O generic no TypeScript nos permite reutilizar uma determinada implementação de código, de forma tipada. Para representar um generic, nós declaramos ele dessa forma <T> (podendo ser utilizado qualquer outra letra, existem as convenções que podemos seguir):

- <S> → Representando State 
- <T> → Representando Type 
- <K> → Representando Key 
- <V> → Representando Value 
- <E> → Representando Element

Exemplo de um trecho de código utilizando generics:

```typescript
function useState<T extends number | string>() {
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return { get, set}
}

let newState = useState<string>();
newState.get();
newState.set("João");
newState.set(123);
```

Obs.: Podemos utilizar o `extends` para acrescentar informação ao generic. No código acima, o <T> foi "extendido" para aceitar tanto number quanto string, porém, isto fica condicionado a declaração do tipo na função.

Obs.2: Se após as informações adicionadas com `extends`, é inserido `= string` após as declarações, siginifica que se nem `number` nem `string` forem definidos pelo usuário ou desenvolvedor, o tipo será considerado como `string`