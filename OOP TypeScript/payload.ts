interface PayloadA {
    data: string;
    date: string;
}
interface PayloadB {
    date: string;
    url: string;
}
interface PayloadC {
    date: string;
    url: string;
    id: number;
}
type Payload = PayloadA | PayloadB | PayloadC;
const handlePayload = (payload: Payload) => {
    const handleA = (payload: PayloadA) => {
        /* ... */
    };
    const handleB = (payload: PayloadB) => {
        /* ... */
    };
    const handleC = (payload: PayloadC) => {
        /* ... */
    };

    // what changes (code and types) can you implement to make sure the correct payload handler is being picked based on the different payload data?

    const ispayloadA = (payload: Payload): payload is PayloadA => {
        return ('data' in payload && 'date' in payload)
    }
    const ispayloadB = (payload: Payload): payload is PayloadB => {
        return ('data' in payload && 'url' in payload && !('id' in payload))
    }
    const ispayloadC = (payload: Payload): payload is PayloadC => {
        return ('data' in payload && 'date' in payload && 'id' in payload)
    }

    if (ispayloadA(payload)) {
        handleA(payload)
    } else if (ispayloadB(payload)) {
        handleB(payload)
    } else if (ispayloadC(payload)) {
        handleC(payload)
    }
};