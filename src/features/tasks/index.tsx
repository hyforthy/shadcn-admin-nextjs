'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { TasksDialogs } from './components/tasks-dialogs'
import { TasksPrimaryButtons } from './components/tasks-primary-buttons'
import { TasksProvider } from './components/tasks-provider'
import { TasksTable } from './components/tasks-table'
import { tasks } from './data/tasks'
import { type NavigateFn } from '@/hooks/use-table-url-state'

export function Tasks() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Create Next.js compatible navigate function
  const navigate: NavigateFn = ({ search, replace = false }) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    
    if (typeof search === 'function') {
      const currentParams = Object.fromEntries(searchParams.entries())
      const updatedParams = search(currentParams)
      
      // Clear all current params
      Array.from(newSearchParams.keys()).forEach(key => {
        newSearchParams.delete(key)
      })
      
      // Set new params
      Object.entries(updatedParams).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (Array.isArray(value)) {
            value.forEach(v => newSearchParams.append(key, String(v)))
          } else {
            newSearchParams.set(key, String(value))
          }
        }
      })
    } else if (typeof search === 'object') {
      // Clear all current params
      Array.from(newSearchParams.keys()).forEach(key => {
        newSearchParams.delete(key)
      })
      
      // Set new params
      Object.entries(search).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (Array.isArray(value)) {
            value.forEach(v => newSearchParams.append(key, String(v)))
          } else {
            newSearchParams.set(key, String(value))
          }
        }
      })
    }
    
    const searchString = newSearchParams.toString()
    const url = searchString ? `?${searchString}` : '/tasks'
    
    if (replace) {
      router.replace(url)
    } else {
      router.push(url)
    }
  }
  
  // Convert searchParams to record
  const search = Object.fromEntries(searchParams.entries())
  
  return (
    <TasksProvider>
      <Header fixed>
        <Search />
        <div className='ms-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Tasks</h2>
            <p className='text-muted-foreground'>
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <TasksPrimaryButtons />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
          <TasksTable data={tasks} search={search} navigate={navigate} />
        </div>
      </Main>

      <TasksDialogs />
    </TasksProvider>
  )
}
