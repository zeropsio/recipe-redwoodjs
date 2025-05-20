import type { FC } from 'react'

interface FatalErrorPageProps {
  error: Error
}

const FatalErrorPage: FC<FatalErrorPageProps> = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 px-4">
      <h1 className="text-4xl font-extrabold text-red-700 mb-6">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg text-red-600 mb-4">
        {error.name}: {error.message}
      </p>
      {error.stack && (
        <pre className="max-w-full overflow-auto bg-white text-sm text-red-800 p-4 rounded shadow">
          {error.stack}
        </pre>
      )}
    </div>
  )
}

export default FatalErrorPage