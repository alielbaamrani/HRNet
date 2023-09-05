import React, { useRef, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import Highlighter from 'react-highlight-words'
import { Button, Input, Space, Table } from 'antd'
import { useSelector } from 'react-redux'

const TableList = () => {
  const dataList = useSelector((state) => state.employee.employees)

  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef(null)
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }

  const handleReset = (clearFilters) => {
    clearFilters()
    setSearchText('')
  }

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false })
              setSearchText(selectedKeys[0])
              setSearchedColumn(dataIndex)
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close()
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toString().toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100)
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  })

  const columns = [
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstName',
      ...getColumnSearchProps('firstName'),
    },
    {
      title: 'LastName',
      dataIndex: 'lastName',
      key: 'lastName',
      ...getColumnSearchProps('lastName'),
    },
    {
      title: 'StartDate',
      dataIndex: 'startDate',
      key: 'startDate',
      sorter: (a, b) => a.startDate.length - b.startDate.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Departement',
      dataIndex: 'departement',
      key: 'departement',
      ...getColumnSearchProps('departement'),
      sorter: (a, b) => a.departement.length - b.departement.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Date Of Birth',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
      sorter: (a, b) => a.dateOfBirth.length - b.dateOfBirth.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Street',
      dataIndex: 'street',
      key: 'street',
      sorter: (a, b) => a.street.length - b.street.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      sorter: (a, b) => a.city.length - b.city.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
      sorter: (a, b) => a.state.length - b.state.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Zip Code',
      dataIndex: 'zipCode',
      key: 'zipCode',
      sorter: (a, b) => a.zipCode.length - b.zipCode.length,
      sortDirections: ['descend', 'ascend'],
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={dataList}
      pagination={{
        position: ['topLeft'],
        showSizeChanger: true, // Activez la fonctionnalité de changement de taille
        pageSizeOptions: ['10', '20', '50'], // Options de taille de page
        defaultPageSize: 10, // Taille de page par défaut
      }}
    />
  )
}

export default TableList
