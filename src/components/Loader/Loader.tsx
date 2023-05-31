import './Loader.css'

interface LoaderProps {
  text?: string
}

const Loader: React.FC<LoaderProps> = ({ text }: LoaderProps) => {
  return (
    <>
      <h1 style={{ margin: '0 auto' }}>{text}</h1>
      <div className='lds-spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default Loader
