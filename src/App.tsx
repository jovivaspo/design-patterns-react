import { CompoundComponent } from './components/CompoundComponent';
import withDataFetch from './components/HigherOrderComponent/withDataFetch';
import { PolymorphicComponent } from './components/PolymorphicComponent';
interface AppProps extends JSX.IntrinsicAttributes {
  data: any; // or define the type of data
  loading: boolean;
}
function App(props: AppProps) {
  const { data, loading } = props;
  return (
    <div className='flex flex-col p-2 justify-start w-full md:w-[80%] xl:w-[70%] mx-0 h-full gap-8'>
      <div className='flex flex-col gap-4'>
        <PolymorphicComponent as={'h1'} className='text-4xl font-bold text-blue-400'>
          Patrones de diseño
        </PolymorphicComponent>
        <PolymorphicComponent as={'h2'} className='text-2xl text-blue-400 underline'>
          Polymorphic Component
        </PolymorphicComponent>
        <PolymorphicComponent as='button' className='w-64' onClick={() => console.log('Clic')}>
          Soy un botón
        </PolymorphicComponent>

        <PolymorphicComponent as='a' href='https://example.com' className='text-white hover:text-blue-400'>
          Soy un enlace
        </PolymorphicComponent>

        <PolymorphicComponent as={'h2'} className='text-2xl text-blue-400 underline'>
          Compound Component
        </PolymorphicComponent>

        <CompoundComponent>
          <CompoundComponent.Item as='h2'>Title</CompoundComponent.Item>
        </CompoundComponent>

        <PolymorphicComponent as={'h2'} className='text-2xl text-blue-400 underline'>
          Higher Order Component
        </PolymorphicComponent>

        {!!loading ? 'Cargando...' : JSON.stringify(data)}
      </div>
    </div>
  );
}

const AppWithDataFetch = withDataFetch(App);

export default AppWithDataFetch;
