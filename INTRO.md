### Svelte & SvelteKit: The Complete Guide

  

---

  

###### What is Svelte

Svelte 는 컴파일러
가상 DOM을 쓰는 것이 아니라 바로 변환해버림

React와 비교

```javascript
// HelloMessage.js
function HellomMessage(props) {
    return (
        <div className="greeting">
            Hello {props.name}
        </div>
    );
}

// App.js
import { useState } from "react";
import HelloMessage from "./HelloMessage";

function App() {
    const [ name, setName ] = useState("World");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <>
            <HelloMessage name={name} />
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
            />
        </>
    );
}
```

```Svelte
// HelloMessage.svelte
<script>
    export let name = '';
</script>

<div class="greeting">
    Hello {name}
</div>

// App.svelte
<script>
    import HelloMessage from "./HelloMessage.svelte";
    let name = "World";
</script>

<HelloMessage name={name} />
<input bind:value={name} />
```

---

### Svelte vs SvelteKit

Svelte는 js 기반 프레임워크

SvelteKit은 고성능 웹앱 제작을 위한 프레임워크
world component를 이용함
ssr

Svelte에게 SvelteKit은
1. React에게 Next.js
2. Vue에게 Nuxt.js
같은 느낌이라고 함

