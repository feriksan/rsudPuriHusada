import {Divider, Select} from "antd";

const Penjadwalan = () => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

// Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    return(
        <>
        <h2>Pilih Poli</h2>
        <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            style={{ width: '100%' }}
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
                {
                    value: 'igd',
                    label: 'IGD',
                },
                {
                    value: 'radiologi',
                    label: 'Radiologi',
                },
                {
                    value: 'bedahsaraf',
                    label: 'Bedaf Saraf',
                },
            ]}
        />
            <Divider/>
            <h2>Pilih Dokter</h2>
            <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                style={{ width: '100%' }}
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={[
                    {
                        value: 'igd',
                        label: 'IGD',
                    },
                    {
                        value: 'radiologi',
                        label: 'Radiologi',
                    },
                    {
                        value: 'bedahsaraf',
                        label: 'Bedaf Saraf',
                    },
                ]}
            />
            <Divider/>
            <h2>Pilih Jadwal</h2>
            <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                style={{ width: '100%' }}
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={[
                    {
                        value: 'igd',
                        label: 'IGD',
                    },
                    {
                        value: 'radiologi',
                        label: 'Radiologi',
                    },
                    {
                        value: 'bedahsaraf',
                        label: 'Bedaf Saraf',
                    },
                ]}
            />
        </>
    )
}
export default Penjadwalan;