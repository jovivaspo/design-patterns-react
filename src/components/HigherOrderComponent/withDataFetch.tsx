import { useEffect, useState } from 'react';
import { JSX } from 'react/jsx-runtime';

const withDataFetch = (WrappedComponent: any) => {
  return function WithDataFetch(props: JSX.IntrinsicAttributes) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <div>
        <WrappedComponent {...{ ...props, data, loading, error, fetchData }} />
      </div>
    );
  };
};

export default withDataFetch;
