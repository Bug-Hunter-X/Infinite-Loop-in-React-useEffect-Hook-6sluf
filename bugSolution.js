```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The empty dependency array ensures this effect runs only once
    // after the initial render.
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```