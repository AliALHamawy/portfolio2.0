import { Component } from 'react'

export class ErrorBoundary extends Component {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      const Fallback = this.props.fallback
      if (Fallback && typeof Fallback === 'function') return <Fallback error={this.state.error} />
      return (
        <div className="p-4 my-4 rounded bg-red-50 text-red-800 border border-red-200">
          <p className="font-semibold">Something went wrong in this section.</p>
          <p className="text-sm mt-1">{this.state.error?.message}</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
